import React, { useState } from "react";
import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { PauseCircleIcon } from "./PauseCircleIcon";
import { Howl } from 'howler'; // Importa Howl desde la biblioteca Howler.js

export default function Radio({ nombre, frecuencia, url }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    // Aquí puedes implementar la lógica para reproducir la URL
    // Puedes usar una biblioteca como Howler.js o el API de audio de JavaScript
    // Ejemplo con Howler.js:
    // Si aún no tienes instalado howler, puedes hacerlo con: npm install howler
    const sound = new Howl({
      src: [url],
      html5: true,
    });

    if (isPlaying) {
      sound.pause();
    } else {
      sound.play();
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
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src="https://nextui.org/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h1 className="text-large font-medium mt-2">{nombre}</h1>
                <h2 className="font-semibold text-foreground/90">{`${frecuencia}`}</h2>
              </div>
            </div>
            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
                onClick={handlePlay}
              >
                <PauseCircleIcon size={54} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

