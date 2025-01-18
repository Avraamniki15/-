// Πίνακας με εδάφια (Παλαιά και Καινή Διαθήκη)
const verses = [
   "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Αν ο Θεός είναι υπέρ μας, ποιος μπορεί να είναι εναντίον μας; - Ρωμαίους 8:31",
  "Ο Θεός είναι φως και σε Αυτόν δεν υπάρχει σκοτία. - 1 Ιωάννου 1:5",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Μη φοβού, διότι εγώ είμαι μετά σου· μη πτοείσαι. - Ησαΐας 41:10",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Μακάριοι οι πτωχοί τω πνεύματι, διότι αυτών είναι η βασιλεία των ουρανών. - Ματθαίος 5:3",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Αγαπήστε τον Θεό με όλη σας την καρδιά και την ψυχή σας. - Ματθαίος 22:37",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Είναι πιο ευλογημένο να δίνεις παρά να παίρνεις. - Πράξεις 20:35",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μην φοβάσαι, διότι εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Ευλογημένος είναι ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Κύριος είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν την γη. - Ματθαίος 5:9",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Θεός είναι αγάπη και όποιος μένει στην αγάπη, μένει στον Θεό. - Α΄ Ιωάννου 4:16",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν την γη. - Ματθαίος 5:9",
  "Ο Κύριος είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Εγώ είμαι ο δρόμος, η αλήθεια και η ζωή. - Ιωάννης 14:6",
  "Αλλά ο Θεός είναι πιστός, ο οποίος δεν θα επιτρέψει να δοκιμαστείτε πέρα από τις δυνάμεις σας. - 1 Κορινθίους 10:13",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Θα σας δώσω καινούργια καρδιά και θα βάλω νέο πνεύμα μέσα σας. - Εζεκιήλ 36:26",
  "Μην φοβάσαι, γιατί εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Επειδή ο Θεός αγαπάει τον κόσμο, έστειλε τον Υιό Του. - Ιωάννης 3:16",
  "Αν ο Υιός σας ελευθερώσει, θα είστε αληθινά ελεύθεροι. - Ιωάννης 8:36",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Είμαι το φως του κόσμου. - Ιωάννης 8:12",
  "Και ο Θεός θα εξαλείψει κάθε δάκρυ από τα μάτια τους. - Αποκάλυψη 21:4",
  "Μη φοβού, εγώ είμαι μετά σου. - Ησαΐας 41:10",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Όποιος αγαπά τον Θεό, θα αγαπά και τον αδελφό του. - 1 Ιωάννου 4:21",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ευλογημένος ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Το να αγαπάς τον Θεό με όλη σου την καρδιά είναι το μεγαλύτερο από τα εντολές. - Ματθαίος 22:37",
  "Το έλεος του Κυρίου είναι αιώνιο. - Ψαλμός 136:1",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Θα περπατώ εν τη αληθεία σου. - Ψαλμός 86:11",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Επειδή με αγαπάει, εγώ θα τον ελευθερώσω. - Ψαλμός 91:14",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Ιησούς Χριστός είναι ο ίδιος χθες, σήμερα και στους αιώνες. - Εβραίους 13:8",
  "Το Πνεύμα το Άγιο βοηθάει στην αδυναμία μας. - Ρωμαίους 8:26",
  "Ο Κύριος είναι ο ποιμένας μου, δεν θα στερηθώ τίποτα. - Ψαλμός 23:1",
  "Ο Θεός δεν μας έδωσε πνεύμα δειλίας, αλλά πνεύμα δυνάμεως και αγάπης. - 2 Τιμόθεον 1:7",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Αγάπησε τον πλησίον σου ως εαυτόν. - Λευιτικόν 19:18",
  "Πάντα τα μπορώ μέσω του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Εξετάστε πάντα το καλό και αποφεύγετε το κακό. - Ρωμαίους 12:9",
  "Είναι ευλογημένοι όσοι πεινούν και διψούν για τη δικαιοσύνη, γιατί αυτοί θα χορταστούν. - Ματθαίος 5:6",
  "Ο Θεός είναι ο καταφύγιός μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Ο Κύριος είναι η δύναμή μας και η σωτηρία μας. - Ψαλμός 118:14",
  "Ο Θεός μάς αγαπά με αιώνια αγάπη. - Ιερεμίας 31:3",
  "Ο Κύριος είναι η δύναμή μας και το καταφύγιό μας, βοηθός σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Μη φοβάσαι, γιατί εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Και ο Θεός θα εφοδιάσει όλα τα αιτήματά σας σύμφωνα με τον πλούτο Του εν δόξη, δια του Χριστού Ιησού. - Φιλιππησίους 4:19",
  "Ποιος είμαι εγώ να κατακρίνω τον άλλον; - Ματθαίος 7:1",
  "Μακάριοι οι πτωχοί τω πνεύματι, διότι αυτών είναι η βασιλεία των ουρανών. - Ματθαίος 5:3",
  "Ο Θεός είναι καταφύγιο και δύναμη, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Ο Κύριος είναι καλός προς όλους. - Ψαλμός 145:9",
  "Αποδίδω τη δόξα στον Θεό που με ενδυναμώνει. - 1 Τιμόθεον 1:12",
  "Ο Θεός αγαπάει τον κόσμο και τον έχει αγαπήσει με αιώνια αγάπη. - Ιερεμίας 31:3",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Ο Θεός αγαπά τους δικαίους και τους φυλάσσει. - Ψαλμός 146:8",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός μάς αγαπά με αιώνια αγάπη. - Ιερεμίας 31:3",
  "Ο Κύριος είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Το αγαπημένο μου είναι το φως του κόσμου. - Ιωάννης 8:12",
  "Όποιος ακολουθεί εμένα, δεν θα περπατήσει στην σκοτία. - Ιωάννης 8:12",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Αγάπησε τον Θεό με όλη σου την καρδιά και όλη σου την ψυχή. - Ματθαίος 22:37",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
     "Η αγαθότητα του Θεού είναι αιώνια. - Ψαλμός 100:5",
  "Ο Κύριος είναι πιστός, και θα σας στηρίξει και θα σας φυλάξει από τον πονηρό. - 2 Θεσσαλονικείς 3:3",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Ευλογημένος είναι ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Εγώ είμαι η ανάσταση και η ζωή. - Ιωάννης 11:25",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μη φοβάσαι, διότι εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Από το στόμα του Θεού προέρχονται όλες οι καλές δωρεές. - Ιακώβου 1:17",
  "Αν ο Θεός είναι υπέρ μας, ποιος μπορεί να είναι εναντίον μας; - Ρωμαίους 8:31",
  "Ευλογημένος ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Ο Θεός είναι φως και σε Αυτόν δεν υπάρχει σκοτία. - 1 Ιωάννου 1:5",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Είναι πιο ευλογημένο να δίνεις παρά να παίρνεις. - Πράξεις 20:35",
  "Ευλογημένος είναι ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Ο Κύριος είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Εάν ο Υιός σας ελευθερώσει, θα είστε αληθινά ελεύθεροι. - Ιωάννης 8:36",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μακάριοι οι πτωχοί τω πνεύματι, διότι αυτών είναι η βασιλεία των ουρανών. - Ματθαίος 5:3",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Μη φοβάσαι, διότι εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Αγαπήστε τον Θεό με όλη σας την καρδιά και την ψυχή σας. - Ματθαίος 22:37",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν την γη. - Ματθαίος 5:9",
  "Εξετάστε πάντα το καλό και αποφεύγετε το κακό. - Ρωμαίους 12:9",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Η αγάπη είναι υπομονετική, η αγάπη είναι καλή. - 1 Κορινθίους 13:4",
  "Ο Κύριος είναι με σας, δεν φοβάστε. - Ιησούς του Ναυή 1:9",
  "Αν ο Θεός είναι υπέρ μας, ποιος μπορεί να είναι εναντίον μας; - Ρωμαίους 8:31",
  "Ο Θεός είναι φως και σε Αυτόν δεν υπάρχει σκοτία. - 1 Ιωάννου 1:5",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Μη φοβού, διότι εγώ είμαι μετά σου· μη πτοείσαι. - Ησαΐας 41:10",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Μακάριοι οι πτωχοί τω πνεύματι, διότι αυτών είναι η βασιλεία των ουρανών. - Ματθαίος 5:3",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Αγαπήστε τον Θεό με όλη σας την καρδιά και την ψυχή σας. - Ματθαίος 22:37",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Είναι πιο ευλογημένο να δίνεις παρά να παίρνεις. - Πράξεις 20:35",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μην φοβάσαι, διότι εγώ είμαι μαζί σου. - Ησαΐας 41:10",
  "Ευλογημένος είναι ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Κύριος είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν την γη. - Ματθαίος 5:9",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη του Θεού είναι άπειρη και ατελείωτη. - Ρωμαίους 8:39",
  "Εγώ είμαι η οδός, η αλήθεια και η ζωή. - Ιωάννης 14:6",
  "Ο Κύριος είναι καλός σε αυτούς που αναμένουν και τον επιθυμούν. - Λαμ. 3:25",
  "Και ο Θεός είπε: Ας γίνει φως, και έγινε φως. - Γένεσις 1:3",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν τη γη. - Ματθαίος 5:9",
  "Αγαπήστε τους εχθρούς σας και προσευχηθείτε για αυτούς που σας καταδιώκουν. - Ματθαίος 5:44",
  "Μη φοβάστε, διότι εγώ είμαι μαζί σας. - Ησαΐας 41:10",
  "Αγαπάτε αλλήλους καθώς σας ηγάπησα. - Ιωάννης 13:34",
  "Ο Θεός είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Αν ο Θεός είναι υπέρ μας, ποιος μπορεί να είναι εναντίον μας; - Ρωμαίους 8:31",
  "Προσευχηθείτε χωρίς να βαρυγκωμήσετε. - Λουκάς 18:1",
  "Ο Θεός είναι φως και δεν υπάρχει καμία σκοτία σε Αυτόν. - 1 Ιωάννου 1:5",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Ευλογημένος είναι ο άνθρωπος που εμπιστεύεται στον Κύριο. - Ιερεμίας 17:7",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν τη γη. - Ματθαίος 5:9",
  "Η ειρήνη του Θεού υπερβαίνει κάθε νου και θα φυλάξει τις καρδιές σας. - Φιλιππησίους 4:7",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι καλός και τα σπλάχνα Του είναι ελεήμονα. - Ψαλμός 145:9",
  "Είναι καλύτερο να στηρίζεσαι στον Κύριο παρά να βασίζεσαι στον άνθρωπο. - Ψαλμός 118:8",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν τη γη. - Ματθαίος 5:9",
  "Η ειρήνη του Θεού υπερβαίνει κάθε νου και θα φυλάξει τις καρδιές σας. - Φιλιππησίους 4:7",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
   "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Μην ανησυχείτε για τίποτα, αλλά σε κάθε περίπτωση με προσευχή και παρακλήσεις, με ευχαριστίες, ας γνωστοποιούνται τα αιτήματά σας στον Θεό. - Φιλιππησίους 4:6",
  "Η αγάπη του Θεού είναι άπειρη και ατελείωτη. - Ρωμαίους 8:39",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Εγώ είμαι η οδός, η αλήθεια και η ζωή. - Ιωάννης 14:6",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν τη γη. - Ματθαίος 5:9",
  "Μη φοβάστε, διότι εγώ είμαι μαζί σας. - Ησαΐας 41:10",
  "Αγαπάτε αλλήλους καθώς σας ηγάπησα. - Ιωάννης 13:34",
  "Ο Θεός είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Αν ο Θεός είναι υπέρ μας, ποιος μπορεί να είναι εναντίον μας; - Ρωμαίους 8:31",
  "Πάντα τα μπορώ διά του Χριστού που με ενδυναμώνει. - Φιλιππησίους 4:13",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Προσευχηθείτε χωρίς να βαρυγκωμήσετε. - Λουκάς 18:1",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η ειρήνη του Θεού υπερβαίνει κάθε νου και θα φυλάξει τις καρδιές σας. - Φιλιππησίους 4:7",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Εξετάστε το πνεύμα και το λάδι της πίστης με την αγάπη. - Εβραίους 10:24",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός δεν θέλει τον θάνατο του αμαρτωλού, αλλά να επιστρέψει και να ζήσει. - Ιεζεκιήλ 33:11",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μην κατακρίνετε και δεν θα κατακριθείτε. - Λουκάς 6:37",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Η ειρήνη του Θεού υπερβαίνει κάθε νου και θα φυλάξει τις καρδιές σας. - Φιλιππησίους 4:7",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Κύριος είναι ποιμένας μου, δεν θέλω στερηθώ. - Ψαλμός 23:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Ο Κύριος είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μακάριοι οι ειρηνοποιοί, διότι αυτοί θα κληρονομήσουν τη γη. - Ματθαίος 5:9",
  "Η ειρήνη του Θεού υπερβαίνει κάθε νου και θα φυλάξει τις καρδιές σας. - Φιλιππησίους 4:7",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι κοντά σε αυτούς που έχουν συντετριμμένη καρδιά. - Ψαλμός 34:18",
  "Μακάριοι οι καθαροί στην καρδιά, διότι αυτοί θα δουν τον Θεό. - Ματθαίος 5:8",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Η χαρά του Κυρίου είναι η δύναμή σας. - Νεεμίας 8:10",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Η αγάπη καλύπτει πλήθος αμαρτιών. - 1 Πέτρου 4:8",
  "Η προσευχή του δικαίου έχει μεγάλη δύναμη. - Ιακώβου 5:16",
  "Ο Θεός είναι το φως μας και η σωτηρία μας. - Ψαλμός 27:1",
  "Ο Θεός είναι το καταφύγιό μας και η δύναμή μας, βοήθεια σε καιρούς στεναχώριας. - Ψαλμός 46:1",
  "Ο Κύριος είναι το φως μου και η σωτηρία μου, ποιον να φοβηθώ; - Ψαλμός 27:1",
  "Ο Θεός είναι η δύναμή μου και το καταφύγιό μου. - Ψαλμός 118:14"
];

// Συνάρτηση για την επιλογή τυχαίου εδαφίου με βάση την ημέρα του έτους
function getVerseOfTheDay() {
  const now = new Date();
  const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000); // Υπολογισμός ημέρας του έτους
  const index = dayOfYear % verses.length; // Επιλογή με βάση το υπόλοιπο
  return verses[index];
}

// Εμφάνιση του εδαφίου στο κουτί
document.getElementById("verse").innerText = getVerseOfTheDay();
