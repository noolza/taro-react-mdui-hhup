import Request, {CallFunction} from '@utils/request';

export const itemInfo = (data) => CallFunction({
  name: 'publish',
  method: 'getGood',
  data: data
});
