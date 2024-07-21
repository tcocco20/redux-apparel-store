import { Button, Modal, ModalBody, ModalContent } from "@nextui-org/react";
import CartItems from "./CartItems.tsx";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return (
    <Modal
      className="p-0"
      radius="sm"
      isOpen={true}
      onOpenChange={onClose}
      placement="top"
      closeButton={<div className="hidden pointer-events-none" />}
    >
      <ModalContent className="p-0">
        {(onClose) => (
          <ModalBody className="p-0">
            <div
              id="cart-modal"
              className="bg-yellow-600/60 px-4 py-2 flex flex-col"
            >
              <h2 className="text-2xl font-serif uppercase mb-2 font-semibold text-yellow-950/80">
                Your Cart
              </h2>
              <CartItems />

              <Button
                onClick={onClose}
                radius="sm"
                size="sm"
                className="self-end mb-3 text-white bg-yellow-950 text-base font-light"
              >
                Close
              </Button>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
