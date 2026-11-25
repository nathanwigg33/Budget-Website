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
      "A clean monthly budget for people who are just getting started. Type in your budget and your spending, and the sheet does all the math for you.",
    color: "mint",
    features: [
      "Monthly budget by category",
      "Quick transaction log",
      "Automatic totals and what's left",
      "Spending chart",
      "One color theme",
      "Step-by-step setup guide",
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
      { src: "/assets/sheets/complete/dashboard.webp", alt: "Budget dashboard with income, expenses, remaining and savings rate cards, budget health bars, spending by type, a spending donut chart, top 5 categories, a month-by-month chart and insights" },
      { src: "/assets/sheets/complete/budget.webp", alt: "Budget planner tab with color-coded category types, monthly budgets, actual spending, differences and progress bars" },
      { src: "/assets/sheets/complete/transactions.webp", alt: "Transactions tab with date, description, category, automatic type, payment method and amount columns" },
    ],
    features: [
      "Everything in Starter",
      "Income tracking with savings rate and cash flow",
      "Category types: Fixed, Variable, Savings, Giving, Debt, Investment",
      "View by month, quarter, year or a custom date range",
      "Colorful dashboard with cards, charts and a Top 5 list",
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
