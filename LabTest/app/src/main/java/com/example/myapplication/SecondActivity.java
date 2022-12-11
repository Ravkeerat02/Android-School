package com.example.myapplication;


import androidx.appcompat.app.AppCompatActivity;

import android.annotation.SuppressLint;
import android.graphics.Color;
import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.ListView;


public class SecondActivity extends AppCompatActivity {


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        String[] colors = {"Red", "Green", "Blue"};
        ArrayAdapter adpater;
        adpater = new ArrayAdapter<String>(this, R.layout.activity_second, R.id.textView, colors);
        ListView listView = (ListView) findViewById(R.id.list_view);
        listView.setAdapter(adpater);
    }

    @SuppressLint("ResourceType")
    public void onListItemClick(ListView parent, View view, char position, long id) {
        switch (position) {
            case 0:
                view.setBackgroundResource(Color.RED);
                break;
            case 1:
                view.setBackgroundResource(Color.BLUE);
                break;
            case 2:
                view.setBackgroundResource(Color.GREEN);
                break;
            case 3:
                view.setBackgroundResource(Color.WHITE);
                break;
        }
    }
    //Selected item
    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        switch (item.getItemId()) {
            case android.R.id.home:
                this.finish();
                return true;
        }
        return super.onOptionsItemSelected(item);
    }
}
}

