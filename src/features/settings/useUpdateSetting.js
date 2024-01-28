import { useQueryClient, useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateSetting as updateSettingsApi } from "../../services/apiSettings";
export function useUpdateSetting() {
  const queryClient = useQueryClient();
  const { isLoading: isUpdating, mutate: updateSetting } = useMutation({
    mutationFn: (newSettingData) => updateSettingsApi(newSettingData),
    onSuccess: () => {
      toast.success(" Setting successfully edited");
      queryClient.invalidateQueries({
        queryKey: ["settings"],
      });
    },
    onError: (err) => toast.error(err.message),
  });
  return { isUpdating, updateSetting };
}
