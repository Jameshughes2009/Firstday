-- INSERT INTO courses (id, course_title, course_description, active)
-- VALUES (001, "Algebra I", "Linear equations, inequalities, functions, and graphs", true),
--        (002, "Pre-Calculus", "Polynomials, Complex Numbers, Vectors", true),
--        (003, "Calculus I", "Limits, Differentiation, Derivatives", true),
--        (004, "Euclidean Geometry", "Intuitively Appealing Axioms Galore", false);
       
-- WIth AUTO_INCREMENT we can remove "id" and all realted numbers
INSERT INTO courses (course_title, course_description, active)
VALUES ("Algebra I", "Linear equations, inequalities, functions, and graphs", true),
       ("Pre-Calculus", "Polynomials, Complex Numbers, Vectors", true),
       ("Calculus I", "Limits, Differentiation, Derivatives", true),
       ("Euclidean Geometry", "Intuitively Appealing Axioms Galore", false);
       