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
    },

    validate(frm) {
        // Prevent saving if return_date is before transaction_date
        if (frm.doc.return_date && frm.doc.return_date < frm.doc.transaction_date) {
            frappe.throw("Return Date cannot be before the Transaction Date!");
        }
    }
});
