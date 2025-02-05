import { ProductTypeModel } from "@/feature/product/domain/product-type.model";
import { ProductTagModel } from "@/feature/product/domain/product-tag.model";

export class AbstractProductModel {
  readonly id: string;
  readonly thumbnailUrl: string;
  readonly type: ProductTypeModel;
  readonly title: string;
  readonly year: number;
  readonly tags: ProductTagModel[];

  protected constructor(props: {
    id: string;
    thumbnailUrl: string;
    type: ProductTypeModel;
    title: string;
    year: number;
    tags: ProductTagModel[];
  }) {
    this.id = props.id;
    this.thumbnailUrl = props.thumbnailUrl;
    this.type = props.type;
    this.title = props.title;
    this.year = props.year;
    this.tags = props.tags;
  }
}
