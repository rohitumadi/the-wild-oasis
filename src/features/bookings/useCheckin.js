import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, addBreakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...addBreakfast,
      }),
    onSuccess: (data) => {
      toast.success(`Booking #${data.id} checked in`);
      queryClient.invalidateQueries({ active: true });
      navigate("/");
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("There was an error while checking in");
    },
  });
  return { checkin, isCheckingIn };
}
