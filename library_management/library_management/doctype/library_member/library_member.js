// Copyright (c) 2026, none and contributors
// For license information, please see license.txt

frappe.ui.form.on("Library Member", {
    refresh(frm) {
        // Check if the member has a first name
        if (frm.doc.first_name) {
            frappe.msgprint("Welcome to the library, " + frm.doc.first_name + "!");
        }
    },
});
