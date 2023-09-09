
declare namespace pclj {
    namespace ui {
      function setBusy(element?: any): void;
      function clearBusy(element?: any): void;
    }
    namespace notify {
      function success(message: string, title?: string, time?: number): void;
      function info(message: string, title?: string, time?: number): void;
      function warn(message: string, title?: string, time?: number): void;
      function error(message: string, title?: string, time?: number): void;
    }
    namespace message {
      function info(message: string, title?: string): void;
      function success(message: string, title?: string): void;
      function warn(message: string, title?: string): void;
      function error(message: string, title?: string): void;
      function confirm(message: string, title?: string, callback?: Function): void;
    }
  }
  