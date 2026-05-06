import { openDB } from 'idb';

const DB_NAME = 'glowmart-db';
const DB_VERSION = 1;

const getDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('users')) {
        const userStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
        userStore.createIndex('email', 'email', { unique: true });
        
        // Seed test account
        userStore.add({
          name: 'GlowMart Admin',
          email: 'admin@glowmart.id',
          password: 'password123',
          phone: '081234567890',
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString()
        });
      }
      if (!db.objectStoreNames.contains('sessions')) {
        db.createObjectStore('sessions', { keyPath: 'id' });
      }
    }
  });
};

export const authService = {
  async register({ name, email, password, phone }) {
    const db = await getDB();
    
    const existingUser = await db.getFromIndex('users', 'email', email);
    if (existingUser) {
      throw new Error('Email sudah terdaftar. Silakan gunakan email lain.');
    }

    const user = {
      name,
      email,
      password,
      phone: phone || '',
      avatar: null,
      address: null,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    const id = await db.add('users', user);
    const newUser = { ...user, id };
    delete newUser.password;

    await db.put('sessions', { id: 'current', userId: id, loggedInAt: new Date().toISOString() });
    
    return newUser;
  },

  async login(email, password) {
    const db = await getDB();
    
    const user = await db.getFromIndex('users', 'email', email);
    if (!user) {
      throw new Error('Email tidak ditemukan. Silakan daftar terlebih dahulu.');
    }
    
    if (user.password !== password) {
      throw new Error('Password salah. Silakan coba lagi.');
    }

    await db.put('sessions', { id: 'current', userId: user.id, loggedInAt: new Date().toISOString() });
    
    const safeUser = { ...user };
    delete safeUser.password;
    return safeUser;
  },

  async logout() {
    const db = await getDB();
    await db.delete('sessions', 'current');
  },

  async getCurrentUser() {
    const db = await getDB();
    const session = await db.get('sessions', 'current');
    
    if (!session) return null;
    
    const user = await db.get('users', session.userId);
    if (!user) {
      await db.delete('sessions', 'current');
      return null;
    }
    
    const safeUser = { ...user };
    delete safeUser.password;
    return safeUser;
  },

  async updateProfile(userId, updates) {
    const db = await getDB();
    const user = await db.get('users', userId);
    
    if (!user) throw new Error('User tidak ditemukan');
    
    const updatedUser = {
      ...user,
      ...updates,
      updatedAt: new Date().toISOString()
    };
    
    await db.put('users', updatedUser);
    
    const safeUser = { ...user };
    delete safeUser.password;
    return safeUser;
  },

  async ensureTestUser() {
    const db = await getDB();
    const existing = await db.getFromIndex('users', 'email', 'admin@glowmart.id');
    if (!existing) {
      await db.add('users', {
        name: 'GlowMart Admin',
        email: 'admin@glowmart.id',
        password: 'password123',
        phone: '081234567890',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      });
    }
  }
};

// Ensure test user exists on load
authService.ensureTestUser().catch(console.error);
