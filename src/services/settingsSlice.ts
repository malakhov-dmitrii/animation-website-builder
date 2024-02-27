import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface ISettingsState {
  componentId: string;
  settings: {
    x: number;
    y: number;
    opacity: number;
    scale: number;
    blur: number;
    speed: number;
    delay: number;
    easing: string;
    replay: boolean;
  };
}

export interface IUpdateSettingsAction {
  x?: number;
  y?: number;
  opacity?: number;
  scale?: number;
  blur?: number;
  speed?: number;
  delay?: number;
  easing?: string;
  replay?: boolean;
}

const initialState: ISettingsState[] = [
  {
    componentId: "1-userId",
    settings: {
      x: 0,
      y: 0,
      opacity: -100,
      scale: 0,
      blur: -100,
      speed: -100,
      delay: -100,
      easing: "",
      replay: false,
    },
  },
];

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    updateSettings: (
      state,
      action: PayloadAction<{ id: string; settings: IUpdateSettingsAction }>
    ) => {
      const { id, settings } = action.payload;
      const index = state.findIndex((item) => item.componentId === id);

      if (index !== -1) {
        state[index].settings = { ...state[index].settings, ...settings };
      } else {
        const data = {
          componentId: id,
          settings: {
            x: settings.x !== undefined ? settings.x : 0,
            y: settings.y !== undefined ? settings.y : 0,
            opacity: settings.opacity !== undefined ? settings.opacity : -100,
            scale: settings.scale !== undefined ? settings.scale : 0,
            blur: settings.blur !== undefined ? settings.blur : -100,
            speed: settings.speed !== undefined ? settings.speed : -100,
            delay: settings.delay !== undefined ? settings.delay : -100,
            easing: settings.easing !== undefined ? settings.easing : "",
            replay: settings.replay !== undefined ? settings.replay : false,
          },
        };
        state[index] = data;
      }

      const item = state[index];

      //   element.style = {}

      // update DOM element
      const element = document.getElementById(id);

      const clone = element?.cloneNode(true) as HTMLElement;
      clone.id = `${id}-clone`;
      clone.style.position = "absolute";
      clone.style.zIndex = "1000";
      clone.style.pointerEvents = "none";

      element?.parentNode?.appendChild(clone);

      console.log(item?.settings);

      if (element && !!item?.settings) {
        if (settings.x !== undefined || settings.y !== undefined) {
          element.style.transform = `translate(${item.settings.x}px, ${item.settings.y}px)`;
        }
        if (settings.opacity !== undefined) {
          element.style.opacity = `${item.settings.opacity / 100}`;
        }
        if (settings.scale !== undefined) {
          element.style.transform = `scale(${item.settings.scale})`;
        }
        if (settings.blur !== undefined) {
          element.style.filter = `blur(${item.settings.blur}px)`;
        }
      }
    },
    toggleReplay: (
      state,
      action: PayloadAction<{ id: string; isChecked: boolean }>
    ) => {
      const { id, isChecked } = action.payload;
      const index = state.findIndex((item) => item.componentId === id);
      if (index !== -1) {
        state[index].settings.replay = isChecked;
      } else {
        state.push({
          componentId: id,
          settings: {
            x: 0,
            y: 0,
            opacity: -100,
            scale: 0,
            blur: -100,
            speed: -100,
            delay: -100,
            easing: "",
            replay: isChecked,
          },
        });
      }
    },
    updateEasing: (
      state,
      action: PayloadAction<{ id: string; newValue: string }>
    ) => {
      const { id, newValue } = action.payload;
      const index = state.findIndex((item) => item.componentId === id);
      if (index !== -1) {
        state[index].settings.easing = newValue;
      } else {
        state.push({
          componentId: id,
          settings: {
            x: 0,
            y: 0,
            opacity: -100,
            scale: 0,
            blur: -100,
            speed: -100,
            delay: -100,
            easing: newValue,
            replay: false,
          },
        });
      }
    },
  },
});

export const { updateSettings, toggleReplay, updateEasing } =
  settingsSlice.actions;
export default settingsSlice.reducer;
