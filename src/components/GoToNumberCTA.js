const FIELD_NAME = "GoToNumberCTA";

export const GoToNumberCTA = () => (
  <section className="card-cell__cta">
    <form role="search" onSubmit={onSubmitHandler}>
      <input
        id={FIELD_NAME}
        name={FIELD_NAME}
        type="number"
        inputmode="numeric"
        min="1"
        max="90"
        step="1"
        placeholder="Enter 1-90"
        list="defaultNumbers"
      />
      <datalist id="defaultNumbers">
        {Array(90)
          .fill(1)
          .map((item, index) => index + 1)
          .map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
      </datalist>
      <button type="submit">Go to number</button>
    </form>
  </section>
);

function onSubmitHandler(event) {
  event.preventDefault();

  const formData = new FormData(event.target),
    destinationNumber = formData.get(FIELD_NAME);

  if (destinationNumber) {
    location.hash = `#${destinationNumber}`;
  }
}
