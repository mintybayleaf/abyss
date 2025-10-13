const THREE_HOURS_IN_SECONDS: u32 = 60 * 60 * 3;

fn main() {
    mutability();
    compound_types();
}

fn mutability() {
    let mut x = 5;
    println!("the value of x is {}", x);
    {
        let x = x * 2;
        println!("the value of x in the inner scope is: {x}");
    }
    x = 6;
    println!("the value of x is {}", x)
}

fn strings() {
    let spaces = "    ";
    // Notice the reassining of the type here!
    let spaces = spaces.len();
}

fn integer_types() {
    let a: u8 = 1;
    let b: i8 = 2;
    let c: i64 = 3;
    let d: u64 = 4;
    let e: u64 = 0xDEADBEEF;
    let f: u64 = 0b1111_0000;
    let g: u8 = b'A';
}

fn floating_types() {
    let x = 2.0;
    let y: f32 = 3.0;
}

fn number_operations() {
    let sum = 5 + 10;
    let difference = 95.5 - 4.3;
    let product = 4 * 30;
    let quotient = 56.7 / 32.2;
    let truncated = 5 / 3;
    let remainder = 43 % 5;
}

fn character_types() {
    let c = 'z';
    let z: char = 'ℤ'; // with explicit type annotation
    let heart_eyed_cat = '😻';
}

fn compound_types() {
    // The tuple is a general way of grouping together a variety of types into one
    let tup: (i32, f64, u8) = (500, 6.4, 1);
    println!("the tuple {:#?}", tup);
    let (x, y, z) = tup; // extract the values
    let five_hundred = tup.0;
    let six_point_four = tup.1;
    let one = tup.2;

    // the classic array
    let a = [1, 2, 3, 4, 5, 6];
    let b: [i32; 5] = [1, 2, 3, 4, 5];
    let c = [0; 10];
    println!("the array {:#?}", b);
}
