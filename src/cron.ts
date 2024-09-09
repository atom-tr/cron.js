import { SUPPORTED_SHORTCUTS, UNITS } from './constants';
import { Locale, SetValue } from './types';

interface Settings {
  texts: Locale;
  monthdays: number[];
  hours: number[];
  minutes: number[];
  lang: string;
  enabled_minute: boolean;
  enabled_hour: boolean;
  enabled_day: boolean;
  enabled_week: boolean;
  enabled_month: boolean;
  enabled_year: boolean;
  multiple_dom: boolean;
  multiple_month: boolean;
  multiple_mins: boolean;
  multiple_dow: boolean;
  multiple_time_hours: boolean;
  multiple_time_minutes: boolean;
  numeric_zero_pad: boolean;
  default_period: string;
  default_value: string;
  no_reset_button: boolean;
  disabled: boolean;
  bind_to: null | HTMLElement;
  bind_method: {
    set: (element: JQuery, value: string) => void;
    get: (element: JQuery) => string;
  };
}

const DefaultSettings: Settings = {
  texts: {},
  monthdays: Array.from({ length: 31 }, (_, i) => i + 1),
  hours: Array.from({ length: 24 }, (_, i) => i),
  minutes: Array.from({ length: 60 }, (_, i) => i),
  lang: 'en',
  enabled_minute: true,
  enabled_hour: true,
  enabled_day: true,
  enabled_week: true,
  enabled_month: true,
  enabled_year: true,
  multiple_dom: false,
  multiple_month: false,
  multiple_mins: false,
  multiple_dow: false,
  multiple_time_hours: false,
  multiple_time_minutes: false,
  numeric_zero_pad: false,
  default_period: 'week',
  default_value: '',
  no_reset_button: true,
  disabled: false,
  bind_to: null,
  bind_method: {
    set: ($element: JQuery, value: string) => {
      $element.is(':input') ? $element.val(value) : $element.data('cronjsValue', value);
    },
    get: ($element: JQuery) => {
      return $element.is(':input') ? $element.val() as string : $element.data('cronjsValue') as string;
    },
  },
};

// Hàm khởi tạo cronjs
function cronjs(settings: Partial<Settings>) {
  const mergedSettings = { ...DefaultSettings, ...settings };
  // Logic khởi tạo và xử lý cron
}

// Xuất ra hàm jqCron
export { cronjs };