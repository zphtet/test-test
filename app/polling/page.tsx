import FormComponent from "./form";
import DisplayMsgs from "./display-msgs";
const PollingPage = () => {
  return (
    <div className="p-20 space-y-10">
      <FormComponent />
      <DisplayMsgs />
    </div>
  );
};

export default PollingPage;
