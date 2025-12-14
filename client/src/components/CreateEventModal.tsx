import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createEvent } from "@/api/timeline";

import type { Track } from "@/types/track";

import { EventForm } from "./EventForm";
import { Modal } from "./Modal";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  tracks: Track[];
};

export const CreateEventModal = ({ isOpen, onClose, tracks }: Props) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createEvent,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["events"] });
      onClose();
    },
    onError: (error) => {
      console.error("Failed to create event:", error);
      alert("이벤트 생성에 실패했습니다.");
    },
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="새 이벤트 만들기">
      <EventForm
        tracks={tracks}
        onSubmit={(data) => mutation.mutate(data)}
        onCancel={onClose}
        isLoading={mutation.isPending}
      />
    </Modal>
  );
};
