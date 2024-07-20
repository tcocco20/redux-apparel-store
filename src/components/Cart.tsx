import { Modal, ModalBody, ModalContent } from "@nextui-org/react";
import CartItems from "./CartItems.tsx";

type CartProps = {
  onClose: () => void;
};

export default function Cart({ onClose }: CartProps) {
  return (
    <Modal
      isOpen={true}
      onOpenChange={onClose}
      placement="top"
      closeButton={<div className="hidden pointer-events-none" />}
    >
      <ModalContent>
        {(onClose) => (
          <ModalBody>
            <div id="cart-modal">
              <h2 className="text-2xl font-serif">Your Cart</h2>
              <CartItems />
              <p id="cart-actions">
                <button onClick={onClose}>Close</button>
              </p>
            </div>
          </ModalBody>
        )}
      </ModalContent>
    </Modal>
  );
}
