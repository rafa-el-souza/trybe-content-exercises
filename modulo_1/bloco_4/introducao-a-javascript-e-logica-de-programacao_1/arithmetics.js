function triangleArea(base, height) {
    let area = base * height;
    console.log(`Area is ${area}`);
    return area;
}

function trianglePerimeter(base, height) {
    let perimeter = (2 * base) + (2 * height);
    console.log(`Perimeter is ${perimeter}`);
    return perimeter;
}

triangleArea(6, 99);
trianglePerimeter(6, 99);