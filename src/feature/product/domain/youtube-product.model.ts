import { ProductTypeModel } from "@/feature/product/domain/product-type.model";
import { AbstractProductModel } from "@/feature/product/domain/abstract-product.model";
import { ProductTagModel } from "@/feature/product/domain/product-tag.model";

export class YoutubeProductModel extends AbstractProductModel {
  readonly youtubeId: string;

  private constructor(props: {
    id: string;
    thumbnailUrl: string;
    title: string;
    year: number;
    youtubeId: string;
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
    this.youtubeId = props.youtubeId;
  }

  get externalUrl() {
    return `https://www.youtube.com/watch?v=${this.youtubeId}`;
  }

  static reconstruct(props: {
    id: string;
    thumbnailUrl: string;
    title: string;
    year: number;
    youtubeId: string;
    tags: ProductTagModel[];
  }) {
    return new YoutubeProductModel(props);
  }
}
