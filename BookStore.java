
import java.util.ArrayList;

public class BookStore {
    ArrayList<String> books = new ArrayList<>();

    public void addBook(String title) {
        books.add(title);
    }

    public int calculateTotal(int price) {
        int total = 0;
        for (String book : books) {
            total += price;
        }
        return total;
    }

    public static void main(String[] args) {
        BookStore store = new BookStore();
        store.addBook("Dune");
        store.addBook("Foundation");

        int currentPrice = 20;

        System.out.println("Total price: " + store.calculateTotal(currentPrice))
    }
}