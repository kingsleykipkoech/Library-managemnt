// Copyright (c) 2026, none and contributors
// For license information, please see license.txt

frappe.ui.form.on("Loan", {
    setup(frm) {
        // Filter the 'book' link field to only show Available books
        frm.set_query("book", function () {
            return {
                filters: {
                    "status": "Available"
                }
            };
        });
    },

    onload(frm) {
        // frm.add_fetch("link_fieldname", "source_fieldname", "target_fieldname")
        frm.add_fetch("applicant", "first_name", "full_name");
    }
});
