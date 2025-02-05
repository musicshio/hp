import { ProductTypeModel } from "@/feature/product/domain/product-type.model";
import { AbstractProductModel } from "@/feature/product/domain/abstract-product.model";
import { ProductTagModel } from "@/feature/product/domain/product-tag.model";

export class ExternalProductModel extends AbstractProductModel {
  readonly externalUrl: string;

  private constructor(props: {
    id: string;
    thumbnailUrl: string;
    title: string;
    year: number;
    externalUrl: string;
    tags: ProductTagModel[];
  }) {
    super({
      id: props.id,
      thumbnailUrl: props.thumbnailUrl,
      type: ProductTypeModel.YOUTUBE,
      title: props.title,
      year: props.year,
      tags: props.tags,
    });
    this.externalUrl = props.externalUrl;
  }

  static reconstruct(props: {
    id: string;
    thumbnailUrl: string;
    title: string;
    year: number;
    externalUrl: string;
    tags: ProductTagModel[];
  }) {
    return new ExternalProductModel(props);
  }
}
