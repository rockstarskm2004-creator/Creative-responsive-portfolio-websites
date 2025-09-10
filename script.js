// Example of a simple Java class for a Portfolio Item
public class PortfolioItem {
    private String title;
    private String description;
    private String imageUrl;

    public PortfolioItem(String title, String description, String imageUrl) {
        this.title = title;
        this.description = description;
        this.imageUrl = imageUrl;
    }

    // Getters and setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}

// Example of a simple Java Servlet to handle portfolio item requests
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class PortfolioServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) {
        // Handle GET requests for portfolio items
        // For example, retrieve a list of portfolio items from a database
        List<PortfolioItem> portfolioItems = getPortfolioItemsFromDatabase();
        req.setAttribute("portfolioItems", portfolioItems);
        req.getRequestDispatcher("portfolio.jsp").forward(req, resp);
    }

    private List<PortfolioItem> getPortfolioItemsFromDatabase() {
        // Simulate retrieving data from a database
        List<PortfolioItem> portfolioItems = new ArrayList<>();
        portfolioItems.add(new PortfolioItem("Project 1", "Description 1", "image1.jpg"));
        portfolioItems.add(new PortfolioItem("Project 2", "Description 2", "image2.jpg"));
        return portfolioItems;
    }
}
