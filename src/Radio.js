import React, { useState, useRef } from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { PlayCircleIcon } from "./PlayCircleIcon";
import { Howl } from 'howler'; // Importa Howl desde la biblioteca Howler.js

export default function Radio({ nombre, frecuencia, url, imagen }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const sound = useRef(null);

  const handlePlay = () => {
    if (sound.current) {
      if (isPlaying) {
        sound.current.pause();
      } else {
        sound.current.play();
      }
    } else {
      sound.current = new Howl({
        src: [url],
        html5: true,
        onend: () => {
          // Aquí puedes realizar acciones adicionales cuando la reproducción termine
        },
      });

      sound.current.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 max-w-[610px] radio"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="flex flex-col col-span-6 md:col-span-8 tarjeta">
          <div className="relative col-span-6 md:col-span-4 foto">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={imagen}
              width="100%"
            />
          </div>
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0 NombreYFrecuencia">
                <h1 className="text-large font-medium mt-2">{nombre}</h1>
                <h2 className="font-semibold text-foreground/90">{`${frecuencia}`}</h2>
              </div>
            </div>
            <div className="flex w-full items-center justify-end">
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={handlePlay}
              >
                <PlayCircleIcon size={54} isPlaying={isPlaying} />
              </Button>

            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

