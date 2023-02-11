import Request, {CallFunction} from '../../utils/request';

export const allItems = (data) => CallFunction({
  name: 'publish',
  method: 'getGood',
  data: data
});

export const category = (data) => CallFunction({
  name: 'publish',
  method: 'getCategory',
  data: data
});
