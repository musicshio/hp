"use client";
import {
  Dialog,
  DialogBackdrop,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogPanel,
  DialogTitle,
} from "@/components/animate-ui/headless/dialog";
import { useRouter } from "next/navigation";
import { ReactNode, useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { Box } from "@mui/system";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Instance, InstanceType } from "@/app/(main)/(with-offset)/instances/data";

export type InstanceDetailViewProps = {
  instance: Instance;
};

export default function InstanceDetailView({ instance }: InstanceDetailViewProps) {
  const { title, year, description, externalUrl } = instance;
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      router.back();
    }, 500);
  };

  let image: ReactNode;

  switch (instance.type) {
    case InstanceType.YOUTUBE:
      image = <YoutubeView youtubeUrl={instance.youtubeUrl} title={title} />;
      break;
    case InstanceType.NOTE:
      image = <NoteView noteUrl={instance.noteUrl} title={title} />;
      break;
    case InstanceType.OTHER:
      image = <ThumbnailView thumbnailUrl={instance.thumbnailUrl} title={title} />;
      break;
    default:
      image = null;
  }

  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogBackdrop />

      <DialogPanel className="sm:max-w-[700px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{year}</DialogDescription>
        </DialogHeader>

        <div className="grid gap-4 py-4">
          {image}
          <Box
            sx={{
              whiteSpace: "pre-line",
            }}
          >
            {description}
          </Box>
        </div>

        <DialogFooter>
          <Button asChild>
            <Link href={externalUrl} target="_blank" rel="noopener noreferrer">
              Open <FiExternalLink />
            </Link>
          </Button>
        </DialogFooter>
      </DialogPanel>
    </Dialog>
  );
}

function YoutubeView({ youtubeUrl, title }: { youtubeUrl: string; title: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <iframe
        src={youtubeUrl}
        title={title}
        width={"100%"}
        height={"100%"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="rounded-md"
      />
    </AspectRatio>
  );
}

function NoteView({ noteUrl, title }: { noteUrl: string; title: string }) {
  return (
    <Box>
      <iframe className="note-embed" src={noteUrl} title={title} width={"100%"} height={"200px"} />
      <script async src="https://note.com/scripts/embed.js" charSet="utf-8"></script>
    </Box>
  );
}

function ThumbnailView({ thumbnailUrl, title }: { thumbnailUrl: string; title: string }) {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image fill src={thumbnailUrl} alt={title} className="rounded-md" />
    </AspectRatio>
  );
}
