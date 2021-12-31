import { Livro } from './livro';

export interface LivroRepository {
  save(livro: Livro): Promise<Livro>;
  findAll(): Promise<Livro[]>;
}
