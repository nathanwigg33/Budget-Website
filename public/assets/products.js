// All product info lives here, so prices and features only need changing in one place.
// "checkout" is where each Stripe payment link will go later. Leave it empty until then
// and the button shows "Coming soon".
window.PRODUCTS = {
  starter: {
    name: "Starter Budget",
    tier: "Level 1",
    price: 7,
    tagline: "The simplest way to see where your money goes.",
    description:
      "A clean monthly budget that fits on one page. Pick a month, type in your plan and your spending, and the sheet does all the math and charts for you.",
    color: "mint",
    image: "/assets/sheets/starter/card.webp",
    gallery: [
      { src: "/assets/sheets/starter/overview.webp", alt: "The whole Starter Budget on one page: month picker, summary cards, two charts, the budget table and the transaction log in sage green and cream" },
      { src: "/assets/sheets/starter/dashboard.webp", alt: "Summary cards for income, expenses, remaining, saved and budget used, with a where-your-money-went bar chart and a budget vs. actual chart" },
      { src: "/assets/sheets/starter/tables.webp", alt: "Budget table with color-coded category types, budget, actual, amount left and progress bars, next to the transaction log" },
      { src: "/assets/sheets/starter/how-to-use.webp", alt: "How to Use tab with six setup steps, an explanation of each part of the sheet, and tips and FAQ" },
    ],
    features: [
      "Everything on one page, no tabs to dig through",
      "Month and year picker",
      "Summary cards for income, expenses, what's left, savings and budget used",
      "Budget by category with progress bars",
      "Simple transaction log with category dropdowns",
      "Where-your-money-went and budget vs. actual charts",
      "Color-coded category types",
      "How to Use tab with step-by-step setup",
    ],
    bestFor: "First-time budgeters",
    checkout: "",
  },
  complete: {
    name: "Complete Budget",
    tier: "Level 2",
    price: 15,
    tagline: "Your whole month, organized and easy to read.",
    description:
      "Everything in Starter, plus income tracking, category types and a colorful dashboard that shows your money at a glance. View any month, quarter, year or custom date range.",
    color: "sky",
    popular: true,
    image: "/assets/sheets/complete/card.webp",
    gallery: [
      { src: "/assets/sheets/complete/dashboard.webp", alt: "Budget dashboard with a period picker, income and expense cards with budget vs. actual bars, net income, an expenses donut chart, a ring chart for each spending type, a month-by-month chart and insights" },
      { src: "/assets/sheets/complete/budget.webp", alt: "Budget planner tab with color-coded category types, monthly budgets, actual spending, differences and progress bars" },
      { src: "/assets/sheets/complete/transactions.webp", alt: "Transactions tab with date, description, category, automatic type, payment method and amount columns" },
    ],
    features: [
      "Everything in Starter",
      "Income tracking with savings rate and cash flow",
      "Category types: Fixed, Variable, Savings, Giving, Debt, Investment",
      "View by month, quarter, year or a custom date range",
      "Colorful dashboard with budget vs. actual cards and a ring chart for each spending type",
      "Automatic insights, like how much you can spend per day",
      "Budget vs. actual with progress bars for every category",
      "Settings for payment methods and your savings goal",
    ],
    bestFor: "Anyone who wants the full picture",
    checkout: "",
  },
  ultimate: {
    name: "Ultimate Budget",
    tier: "Level 3",
    price: 24,
    tagline: "Budget, save, pay off debt and track your net worth.",
    description:
      "Everything in Complete, plus the tools for your bigger goals: savings goals, a debt payoff planner, a net worth tracker and a full-year overview.",
    color: "sun",
    features: [
      "Everything in Complete",
      "Savings goals with progress bars",
      "Debt payoff planner",
      "Net worth tracker",
      "Full-year overview",
      "Every color theme",
    ],
    bestFor: "Planners with big goals",
    checkout: "",
  },
  bundle: {
    name: "Everything Bundle",
    tier: "Best value",
    price: 29,
    compareAt: 46,
    tagline: "Every sheet, every theme, every future update.",
    description:
      "Get all three budget sheets together, plus bonus trackers and free updates whenever we add something new.",
    color: "berry",
    features: [
      "Starter, Complete and Ultimate sheets",
      "Every color theme",
      "Bonus trackers: bills, subscriptions, sinking funds",
      "Free future updates",
    ],
    bestFor: "Getting everything at once",
    checkout: "",
  },
};
