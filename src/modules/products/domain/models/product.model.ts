import { CreateProductDto, ProductDto } from '../dtos/product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

export class Product {
  readonly id: number;
  public description?: string;
  readonly createdAt: Date;
  public updatedAt: Date;

  constructor(
    public name: string,
    public price: number,
    public quantity: number,
    options?: {
      id?: number;
      description?: string;
      createdAt?: Date;
      updatedAt?: Date;
    },
  ) {
    this.id = options?.id;
    this.description = options?.description;
    this.createdAt = options?.createdAt ?? new Date();
    this.updatedAt = options?.updatedAt ?? new Date();
  }

  update(data: UpdateProductDto): Product {
    this.name = data.name ?? this.name;
    this.price = data.price ?? this.price;
    this.quantity = data.quantity ?? this.quantity;
    this.description = data.description ?? this.description;
    this.updatedAt = new Date();
    return this;
  }

  toJson(): ProductDto {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      quantity: this.quantity,
      description: this.description,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  static fromJson(json: ProductDto ): Product {
    return new Product(
      json.name,
      json.price,
      json.quantity,
      {
        id: json.id,
        description: json.description,
        createdAt: json.createdAt,
        updatedAt: json.updatedAt,
      },
    );
  }
}
