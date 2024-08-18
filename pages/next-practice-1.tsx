import { Inter } from "next/font/google";
import Link from "next/link";

import { ThemeProvider1 } from "@/context/next-practice-1/ThemeContext1";

import Autocomplete from "@/components/nextPractice1/autocomplete1";
import Button1 from "@/components/nextPractice1/button1";
import DarkModeToggle1 from "@/components/nextPractice1/darkModeToggle1";
import Form1 from "@/components/nextPractice1/form1";
import Grid1 from "@/components/nextPractice1/grid1";
import LargeList1 from "@/components/nextPractice1/largeList1";
import ThemeSwitcher1 from "@/components/nextPractice1/themeSwitcher1";
import LazyImage1 from "@/components/nextPractice1/lazyImage1";
import Counter from "@/components/nextPractice1/counter";

const inter = Inter({ subsets: ["latin"] });

const names = [
  {
    id: 1,
    content: <p>Samson</p>,
  },
  {
    id: 2,
    content: <p>Esther</p>,
  },
  {
    id: 3,
    content: <p>Felicia</p>,
  },
  {
    id: 4,
    content: <p>Michael</p>,
  },
  {
    id: 5,
    content: <p>Seyi</p>,
  },
  {
    id: 6,
    content: <p>Noble</p>,
  },
  {
    id: 7,
    content: <p>Hiantus</p>,
  },
  {
    id: 8,
    content: <p>Zuntus</p>,
  },
  {
    id: 9,
    content: <p>Parazuntus</p>,
  },
];

const suggestions = ["Samson", "Esther", "Michael", "Felicia"];

const mockItems: string[] = [
  "Apple",
  "Banana",
  "Cherry",
  "Date",
  "Elderberry",
  "Fig",
  "Grape",
  "Honeydew",
  "Indian Fig",
  "Jackfruit",
  "Kiwi",
  "Lemon",
  "Mango",
  "Nectarine",
  "Orange",
  "Papaya",
  "Quince",
  "Raspberry",
  "Strawberry",
  "Tomato",
  "Ugli Fruit",
  "Vanilla Bean",
  "Watermelon",
  "Xigua",
  "Yellow Passion Fruit",
  "Zucchini",
];

// bg-white dark:bg-gray-900 text-black dark:text-white

export default function Home() {
  return (
    <ThemeProvider1>
      <main
        className={`min-h-screen p-24 ${inter.className} bg-white dark:bg-gray-900 text-black dark:text-white`}
      >
        <div className="flex flex-row space-x-5">
          <Link href="/">
            <Button1
              size="medium"
              color="secondary"
              isLoading={false}
              disabled={false}
              className="w-auto"
            >
              Back Home
            </Button1>
          </Link>
          <h1 className="text-blue-500 text-3xl font-bold text-center">
            Next Practice 1
          </h1>
        </div>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">No. 1: Button Component</h2>
          <div className="my-2">
            <Button1
              size="medium"
              color="primary"
              isLoading={false}
              disabled={false}
              className="w-auto"
            >
              Button
            </Button1>
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">
            No. 2: Responsive Grid layout
          </h2>
          <div className="my-2">
            <Grid1 items={names} />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">No. 3: Autocomplete</h2>
          <div className="my-2">
            <Autocomplete suggestions={suggestions} />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">
            No. 4: Optimized Large List
          </h2>
          <div className="my-2">
            <LargeList1 items={mockItems} />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">No. 5: Dark mode toggle</h2>
          <div className="my-2">
            <DarkModeToggle1 />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">
            No. 6: Form with Validation (React Hook Form)
          </h2>
          <div className="my-2">
            <Form1 />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">
            No. 7: Theme Switcher (React Context)
          </h2>
          <div className="my-2">
            <ThemeSwitcher1 />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">No. 8: Lazy Loading Image</h2>
          <div className="my-2">
            <LazyImage1
              className="w-auto h-auto"
              alt="lazy image"
              src="/lazyImage.jfif"
            />
          </div>
        </section>

        <section className="my-4 p-2">
          <h2 className="text-blue-500 text-2xl">
            No. 9: Count (React Global State)
          </h2>
          <div className="my-2">
            <Counter />
          </div>
        </section>
      </main>
    </ThemeProvider1>
  );
}
