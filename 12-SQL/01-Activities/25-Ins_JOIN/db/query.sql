SELECT course_names.id AS courses_id, course_names.name AS courses_name, department.id AS dept_id, department.name AS dept_name
FROM course_names
JOIN department ON course_names.department = department.id;
