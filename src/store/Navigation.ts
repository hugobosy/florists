export const NAVIGATION_TYPE = 'NAVIGATION_TYPE';

export interface Navigation {
  isVisibility: boolean;
}

export interface NavigationAction {
  type: string;
  payload: Navigation | null;
}

export const NavigationReducer = (state: Navigation | null = null, action: NavigationAction): Navigation | null => {
  switch (action.type) {
    case NAVIGATION_TYPE:
      return action.payload;
    default:
      return state;
  }
};