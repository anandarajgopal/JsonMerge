
module.exports = {
    mergePatch=function (Target, Patch) {
        //in js array and null is also considered as object
        if (typeof Patch === "object" && !Array.isArray(Patch) && Patch !== null) {
            if (typeof Target !== "object" || Array.isArray(Target) || Target === null) {
                Target = {};
            }
            for (var Name in Patch) {
                var Value = Patch[Name];
                if (Value === null) {
                    if (Target.hasOwnProperty(Name)) {
                        delete Target[Name];
                    }
                } else {
                    Target[Name] = mergePatch(Target[Name], Value);
                }
            }
            return Target
        } else {
            return Patch
        }
    }
}