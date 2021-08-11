import { Book, BookStore} from '../book';

const store = new BookStore();

describe("Book Model", () => {
  it('should have an index method', () => {
    expect(store.index).toBeDefined();
  });

  it('index method should return list of products', async () => {
    const result = await store.index();
    expect(result).toEqual([]);
  });
});