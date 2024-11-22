package com.ai2connect.companyService.config;

import java.util.Date;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/debug")
public class DebugController {

    @GetMapping("/cors-test")
    public Map<String, String> corsTest() {
        return Map.of(
            "message", "If you can see this, CORS is working!",
            "timestamp", new Date().toString()
        );
    }
    
    @PostMapping("/cors-test")
    public Map<String, String> corsTestPost(@RequestBody(required = false) Map<String, Object> body) {
        return Map.of(
            "message", "POST request received successfully!",
            "receivedData", body != null ? body.toString() : "no data",
            "timestamp", new Date().toString()
        );
    }
}