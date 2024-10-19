export interface Style {
    color?: string; // Optional CSS property
    fontSize?: string; // Optional CSS property
    backgroundColor?: string; // Optional CSS property
    [key: string]: any; // Allow other properties dynamically if needed
}
