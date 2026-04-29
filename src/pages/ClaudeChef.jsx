import React from "react";
import chef from "../assets/ChefClaude.png";
import "../styles/chef.css";
import { Plus} from "lucide-react";

const ChefClaude = () => {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    const ingredientsListItems = ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const newingredient = formData.get("ingredient");
        console.log("New ingredient:", newingredient);
        ingredients.push(newingredient);
    }

    return (
        <main className="chef-page">
            <header className="chef-topbar">
                <div className="chef-brand">
                    <img src={chef} alt="Claude mascot" className="chef-brand-mark" />
                    <span>Claude Chef</span>
                </div>
                <nav className="chef-nav" aria-label="Chef navigation">
                </nav>
                <a className="chef-pill" href="#contact">Book a tasting</a>
            </header>
            <section className="chef-hero">
                <form className="chef-add-ingredient-form" onSubmit={handleSubmit}>
                    <input 
                        aria-label="Add Ingredient"
                        type="text"
                        placeholder="e.g. 2 chicken breasts"
                        name="ingredient"
                    />
                    
                    <button type="submit">
                        <Plus />
                    </button>
                </form>
                
            </section>
            
            <section className="chef-ingredients-section">
                <h2 className="chef-ingredients-title">Ingredients on hand:</h2>
                <ul className="chef-ingredients-list" aria-live="polite">
                    {ingredientsListItems}
                </ul>
            </section>

            {/* <section className="chef-hero">
                <div className="chef-hero-copy">
                    <p className="chef-kicker">Chef / Culinary Studio</p>
                    <h1>
                        <span className="chef-title-mark" aria-hidden="true">
                            <img src={chef} alt="" />
                        </span>
                        Delegate dinner to Claude, and delight in the result.
                    </h1>
                    <p className="chef-summary">
                        Tell Claude what you have on hand, choose the style you want, and
                        shape a recipe around your pantry, timing, and preferences.
                    </p>
                    <div className="chef-actions">
                        <a className="chef-button chef-button--light" href="#request">Start the form</a>
                        <a className="chef-button chef-button--ghost" href="#guide">View the guide</a>
                    </div>
                </div>

                <div className="chef-hero-visual">
                    <div className="chef-card">
                        <img src={chef} alt="Claude the Chef" className="chef-image" />
                    </div>
                </div>
            </section>
            <section className="chef-feature" id="guide">
                <div className="chef-feature-illustration" aria-hidden="true">
                    <span>02</span>
                </div>
                <div className="chef-feature-copy">
                    <p className="chef-section-label">How it works</p>
                    <h2>Claude builds recipes based on what you have and what you want.</h2>
                    <p>
                        The system is designed to gather the important details about your
                        pantry, timing, and preferences, then shape a recipe that fits the
                        information you provide.
                    </p>
                    <p>
                        The more you use it and save preferences, the better it gets at
                        suggesting recipes that fit your style and needs.
                    </p>
                </div>
            </section> */}

            {/* <section className="chef-feature chef-feature--split" id="story">
                <div className="chef-feature-illustration chef-feature-illustration--dark" aria-hidden="true">
                    <span>01</span>
                </div>
                <div className="chef-feature-copy">
                    <p className="chef-section-label">About Claude Chef</p>
                    <h2>A recipe builder shaped like an editorial system.</h2>
                    <p>
                        Claude is built for fun recipe ideas, not serious cooking operations.
                        The idea is to gather what you have, then compose a recipe that feels
                        polished, thoughtful, and easy to follow.
                    </p>
                    <p>
                        Think pantry first, then preferences, then the recipe shape. The system
                        can use ingredients, diet choices, time, and equipment to inspire a
                        clean cooking brief.
                    </p>
                </div>
            </section>

            <section className="chef-form-section" id="request" aria-labelledby="recipe-request-title">
                <div className="chef-form-intro">
                    <p className="chef-kicker">Recipe request</p>
                    <h2 id="recipe-request-title">Tell Claude what you have, and build the recipe from there.</h2>
                    <p>
                        No functionality yet. This is the structure for a guided recipe form
                        with enough fields to gather the important details before a recipe is
                        suggested.
                    </p>
                </div>

                <form className="chef-form" aria-label="Recipe request form">
                    <div className="chef-form-grid">
                        <label className="chef-field chef-field--full">
                            <span>What ingredients do you have?</span>
                            <textarea placeholder="List vegetables, proteins, grains, pantry items, and anything that needs using up." rows="5" />
                        </label>

                        <label className="chef-field">
                            <span>Desired cuisine or style</span>
                            <input type="text" placeholder="Italian, comfort food, brunch, high-protein..." />
                        </label>

                        <label className="chef-field">
                            <span>Dietary preferences</span>
                            <select defaultValue="">
                                <option value="" disabled>Select one</option>
                                <option>None</option>
                                <option>Vegetarian</option>
                                <option>Vegan</option>
                                <option>Gluten-free</option>
                                <option>Dairy-free</option>
                            </select>
                        </label>

                        <label className="chef-field">
                            <span>Allergies or exclusions</span>
                            <input type="text" placeholder="Peanuts, shellfish, mushrooms, onions..." />
                        </label>

                        <label className="chef-field">
                            <span>Servings</span>
                            <input type="number" min="1" placeholder="2" />
                        </label>    

                        <label className="chef-field">
                            <span>Time available</span>
                            <select defaultValue="">
                                <option value="" disabled>Select a time range</option>
                                <option>Under 15 minutes</option>
                                <option>15 to 30 minutes</option>
                                <option>30 to 45 minutes</option>
                                <option>Over 45 minutes</option>
                            </select>
                        </label>

                        <label className="chef-field">
                            <span>Skill level</span>
                            <select defaultValue="">
                                <option value="" disabled>Select one</option>
                                <option>Beginner</option>
                                <option>Comfortable</option>
                                <option>Confident</option>
                            </select>
                        </label>

                        <label className="chef-field">
                            <span>Available equipment</span>
                            <input type="text" placeholder="Oven, skillet, blender, air fryer, grill..." />
                        </label>

                        <label className="chef-field">
                            <span>Meal type</span>
                            <select defaultValue="">
                                <option value="" disabled>Select one</option>
                                <option>Breakfast</option>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Snack</option>
                                <option>Dessert</option>
                            </select>
                        </label>

                        <label className="chef-field chef-field--full">
                            <span>Anything else Claude should know?</span>
                            <textarea placeholder="Favorite flavors, texture preferences, what you want to avoid, or the kind of vibe you want the recipe to have." rows="4" />
                        </label>
                    </div>

                    <div className="chef-form-actions" id="guide">
                        <button type="button" className="chef-button chef-button--light">Preview idea</button>
                        <button type="button" className="chef-button chef-button--ghost">Save preference</button>
                    </div>
                </form>
            </section> */}

            <section className="chef-footer-band" id="contact">
                <div>
                    <p className="chef-section-label">Contact</p>
                    <h2>Bring Claude to the table.</h2>
                </div>
                <a className="chef-button chef-button--light" href="mailto:hello@claudethechef.com">
                    hello@claudethechef.com
                </a>
            </section>

            <footer className="chef-disclaimer">
                <p>This project is made for fun and not for any serious stuff. Not comercial stuff.</p>
                <p>Copyright Nachiketh 2026</p>
            </footer>
        </main>
    );
}

export default ChefClaude;