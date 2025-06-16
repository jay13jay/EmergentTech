export const STORAGE_KEYS = {
  CALCULATOR_PROGRESS: 'smart_home_calculator_progress',
  CALCULATOR_MODE: 'smart_home_calculator_mode',
  USER_PREFERENCES: 'smart_home_user_preferences'
};

export const saveCalculatorProgress = (data: any) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CALCULATOR_PROGRESS, JSON.stringify(data));
  } catch (error) {
    console.warn('Failed to save calculator progress:', error);
  }
};

export const loadCalculatorProgress = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.CALCULATOR_PROGRESS);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.warn('Failed to load calculator progress:', error);
    return null;
  }
};

export const clearCalculatorProgress = () => {
  try {
    localStorage.removeItem(STORAGE_KEYS.CALCULATOR_PROGRESS);
  } catch (error) {
    console.warn('Failed to clear calculator progress:', error);
  }
};

export const saveCalculatorMode = (mode: string) => {
  try {
    localStorage.setItem(STORAGE_KEYS.CALCULATOR_MODE, mode);
  } catch (error) {
    console.warn('Failed to save calculator mode:', error);
  }
};

export const loadCalculatorMode = (): string => {
  try {
    return localStorage.getItem(STORAGE_KEYS.CALCULATOR_MODE) || 'basic';
  } catch (error) {
    console.warn('Failed to load calculator mode:', error);
    return 'basic';
  }
};

export const trackCalculatorUsage = (event: string, data?: any) => {
  // In a real implementation, this would send analytics data
  console.log('Calculator Analytics:', { event, data, timestamp: new Date().toISOString() });
};

export const formatPhoneNumber = (phone: string): string => {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
};

export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const debounce = (func: Function, wait: number) => {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: any[]) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};
