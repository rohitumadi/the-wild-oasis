import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";
export function useDeleteBooking() {
  const queryClient = useQueryClient();
  const { mutate: deleteBooking, isLoading: isDeletingBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: (data) => {
      toast.success(`Booking  deleted`);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },

    onError: (err) => {
      console.log(err.message);
      toast.error("There was an error while deleting booking");
    },
  });
  return { deleteBooking, isDeletingBooking };
}
