import React from 'react'
import { useNavigate } from 'react-router-dom';
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

const Am = () => {
  
  const navigate = useNavigate();

  const HandleGoListaRadiosAm = () => {
    navigate('/lista-radios-am');
  };
  
  
  return (
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none am"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="https://img.freepik.com/vector-premium/radio-vector-aislado-3d-icono-vintage-radio-antena-3d-ilustracion_645658-914.jpg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
      <h2 className='frecuencia'>AM</h2>
        <Button onClick={HandleGoListaRadiosAm} className=" text-white bg-black/20" variant="shadow" color="default" radius="lg" size="lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
          </svg>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default Am