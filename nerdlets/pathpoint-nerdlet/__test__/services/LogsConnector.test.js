import LogConnect from '../../services/LogsConnector';

jest.mock(
  'nr1',
  () => {
    const UserQuery = {
      query: jest.fn().mockReturnValue({
        data: [{ name: 'NAME', id: 123, email: 'NAME@NAME.COM' }]
      })
    };
    return {
      UserQuery: UserQuery
    };
  },
  { virtual: true }
);
describe('LogsConnector', () => {
  let logConnector;

  beforeEach(() => {
    logConnector = new LogConnect();
    // eslint-disable-next-line no-console
    console.log(logConnector);
  });
  it('Function asdasd', () => {
    // eslint-disable-next-line no-console
    console.log(logConnector);
  });
  // it('Function SendLog()', () => {
  //   const datos = {
  //     pathpointID: '12587',
  //     mesagge: 'log enviado'
  //   };
  //   logConnector.SendLog(datos);
  //   expect(logConnector.buffer.length).toEqual(1);
  // });

  // it('Function checkbuffer() with licenseKey', () => {
  //   logConnector.buffer = {
  //     pathpointID: '12587',
  //     mesagge: 'log enviado'
  //   };
  //   logConnector.CheckBuffer();
  // });

  // it('Function checkbuffer() without licenseKey', () => {
  //   logConnector.licenseKey = '';
  //   logConnector.buffer = [
  //     {
  //       pathpointID: '12587',
  //       mesagge: 'log enviado'
  //     }
  //   ];
  //   logConnector.axiosInstance.post.then = jest.fn();
  //   logConnector.CheckBuffer();
  //   expect(logConnector.buffer.length).toEqual(0);
  // });

  // it('Function checkbuffer() without licenseKey and max buffer', () => {
  //   logConnector.licenseKey = '';
  //   for (let i = 0; i < 23000; i++) {
  //     const obj = {
  //       pathpointID: '12587',
  //       mesagge: 'log enviado'
  //     };
  //     logConnector.buffer.push(obj);
  //   }
  //   logConnector.axiosInstance.post.then = jest.fn();
  //   logConnector.CheckBuffer();
  //   expect(logConnector.buffer.length).toEqual(0);
  // });
});
