import Link from "next/link";
import classes from "./page.module.css"
import Mealsgrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/Getmeals";
import { Suspense } from "react";

export const metadata = {
    title: 'All Meals',
    description: 'Browse the delicious meals shared by our vibrant community.',
}
 async function MealsList(){
    console.log("fetching meals");
    const meals =await getMeals();
    return <Mealsgrid meals={meals}/>
}

export default function Meals () {
    
    return (
        <>
        <header className={classes.header}>
            <h1>
            Delicious meals, created <span className={classes.highlight}>by you</span>
            </h1>
            <p>
                Choose your favorite recipe and cook it yourself. It is easy and fun!
            </p>
            <p className={classes.cta}>
                <Link href="/meals/share">
                Share Your Favorite Recipe
                </Link>
            </p>
        </header>
        <main className={classes.main}></main>
        <Suspense fallback={ <p className={classes.loading}>Fetching Meals.....</p>}>
        <MealsList />
        </Suspense>
        </>
    );
}