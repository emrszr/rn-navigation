export const authService = {
  login: async (email, password) => {
    // Burada API isteği yapılabilir (fetch veya axios ile)
    if (email === 'test@test.com' && password === '123456') {
      return {
        id: 1,
        email,
        token: 'fake-jwt-token',
      };
    } else {
      throw new Error('Geçersiz giriş bilgileri!');
    }
  },
};
