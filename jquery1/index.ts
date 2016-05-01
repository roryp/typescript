/// <reference path="def/jquery.d.ts" />
/// <reference path="def/typings/main/ambient/toastr/index.d.ts" />

namespace play {
    $(document).ready(function () {
        toastr.success('Hello TypeScript!');
    });
}
