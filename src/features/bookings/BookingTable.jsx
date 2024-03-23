import Empty from "../../ui/Empty";
import Menus from "../../ui/Menus";
import Pagination from "../../ui/Pagination";
import Spinner from "../../ui/Spinner";
import Table from "../../ui/Table";
import BookingRow from "./BookingRow";
import { useBookings } from "./useBookings";

function BookingTable() {
  const { bookings, isLoading, count } = useBookings();

  if (isLoading) return <Spinner />;

  if (!bookings.length) return <Empty resource={"bookings"} />;

  return (
    <Menus>
      <Table columns="0.6fr 2fr 2.4fr 1.4fr 1fr 3.2rem">
        <Table.Header>
          <div>Cabin</div>
          <div>Guest</div>
          <div>Dates</div>
          <div>Status</div>
          <div>Amount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={bookings}
          render={(booking) => (
            <BookingRow key={booking.id} booking={booking} />
          )}
        />
        <Table.Footer>
          <Pagination count={count} />
        </Table.Footer>
      </Table>
    </Menus>
  );
}

export default BookingTable;

// here filter n sort is done on client side
// 1) Filter
// const filterValue = searchParams.get("status") || "all";
// let filteredBookings;
// if (filterValue === "all") filteredBookings = bookings;
// if (filterValue === "checked-out")
//   filteredBookings = bookings.filter(
//     (booking) => booking.status === "checked-out"
//   );
// if (filterValue === "checked-in")
//   filteredBookings = bookings.filter(
//     (booking) => booking.status === "checked-in"
//   );
// if (filterValue === "unconfirmed")
//   filteredBookings = bookings.filter(
//     (booking) => booking.status === "unconfirmed"
//   );

// //2)Sort
// const sortBy = searchParams.get("sortBy") || "startDate-desc";
// const [field, direction] = sortBy.split("-");
// const modifier = direction === "asc" ? 1 : -1;
// const sortedBookings = filteredBookings?.sort((a, b) =>
//   typeof a[field] === "string"
//     ? a[field].localeCompare(b[field]) * modifier
//     : (a[field] - b[field]) * modifier
// );
