import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  Flex,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="900px" bg="pGray.800" w="fit-content">
        <ModalBody padding={0} margin={0}>
          <Image src={imgUrl} w="100%" objectFit="contain" maxH="650px" />
        </ModalBody>

        <ModalFooter>
          <Flex justifyContent="left" w="100%">
            <Link href={imgUrl} target="_blank">
              Abrir original
            </Link>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
}
