// ./src/api/ipProvider.test.js
import {get} from './ipProvider';

jest.spyOn(window, 'fetch');

describe('get()', () => {
    it('should fetch ip when send request', async () => {
        window.fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => {
                return {ip: '100.100.100.100'};
            },
        });
        
        const data = await get();
        expect(data.ip).toBe('100.100.100.100');
        expect(window.fetch).toHaveBeenCalledTimes(1);
        expect(window.fetch).toHaveBeenCalledWith(
            'https://api.ipify.org?format=json', null
        );
    });
});

describe('mock', () => {
    it('jest.fn()', () => {
        const mockFn = jest.fn();

        [1, 2].forEach(mockFn);
        expect(mockFn).toHaveBeenCalledTimes(2);
        // pierwszy parametr przy pierwszym wywołaniu
        expect(mockFn.mock.calls[0][0]).toBe(1);
        // drugi parametr przy pierwszym wywołaniu
        expect(mockFn.mock.calls[0][1]).toBe(0);
        // pierwsza zwrócona wartość
        expect(mockFn.mock.results[0].value).toBe(undefined);
    });

    it('jest.fn(), return', () => {
        const mockFn = jest.fn();
        mockFn.mockReturnValue(false);
        mockFn.mockReturnValueOnce(true);
        mockFn.mockReturnValueOnce(true);

        const newArr = [1, 2, 3].map(mockFn);
        expect(mockFn).toHaveBeenCalledTimes(3);
        expect(newArr).toEqual([true, true, false]);
    });

    it('jest.fn(), promise resolved', async () => {
        const mockPromise = jest.fn();
        mockPromise.mockResolvedValue(true);

        const data = await mockPromise();
        expect(data).toBe(true);
    });

    it('jest.fn(), promise rejected', async () => {
        const mockPromise = jest.fn();
        mockPromise.mockRejectedValue(new Error('Err'));

        expect.assertions(1);

        try {
            await mockPromise();
        } catch(e) {
            expect(e.message).toBe('Err');
        }
    });
});