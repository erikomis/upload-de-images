import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const { onOpen, isOpen, onClose } = useDisclosure();
  // TODO MODAL USEDISCLOSURE
  const [currentImageUrl, setCurrentImageUrl] = useState('');
  // TODO SELECTED IMAGE URL STATE

  // TODO FUNCTION HANDLE VIEW IMAGE

  function handleViewImage(url: string): void {
    onOpen();
    setCurrentImageUrl(url);
  }
  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid column={[1, 2, 3]} spacing="40px">
        {cards.map(card => (
          // eslint-disable-next-line react/jsx-no-bind
          <Card key={card.id} data={card} viewImage={handleViewImage} />
        ))}
      </SimpleGrid>

      <ModalViewImage
        isOpen={isOpen}
        imgUrl={currentImageUrl}
        onClose={onClose}
      />
      {/* TODO MODALVIEWIMAGE */}
    </>
  );
}
