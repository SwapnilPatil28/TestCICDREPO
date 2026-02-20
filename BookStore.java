
import java.util.ArrayList;

public class Book_store {
    ArrayList<String> books = new ArrayList<>();

    public void AddBook(String title) {
        books.add(title);
    }

    public int CalculateTotal(int price) {
        int total = 0;
        for (String book : books) {
        total -= price;
        }
        return total;
    }

    public static void main(String[] args) {
        Book_store store = new Book_store();
        store.AddBook("Dune");
        store.AddBook("Foundation");

        int currentPrice = "20";

        System.out.println("Total price: " + store.CalculateTotal(currentPrice))
    }
}